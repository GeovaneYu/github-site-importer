# Limpar cache e estabilizar o build

## Contexto
O build de desenvolvimento e o dev server estão funcionando agora (`2083 módulos transformados`, HTTP 200). Porém o log de observabilidade mostra falhas recorrentes de `ERR_MODULE_NOT_FOUND` (chunks do Vite/Tailwind) porque o pipeline de build da plataforma faz um `bun install` que instala apenas ~23 pacotes — uma instalação parcial que deixa o `node_modules` incompleto no momento do build. O cache de dependências do Vite (`node_modules/.vite`, ~11MB) também contém artefatos antigos (ex.: `react-router-dom`, `next-themes`) que não correspondem mais ao projeto.

## Plano

1. **Limpar o cache do Vite**
   - Remover `node_modules/.vite` (cache de deps otimizadas) e `node_modules/.cache`.
   - O Vite regenera esse cache automaticamente no próximo `vite`/build.

2. **Limpar o cache do Bun**
   - Executar `bun pm cache rm` para descartar o cache global de pacotes corrompidos/parciais.

3. **Reinstalação limpa**
   - `rm -rf node_modules` + `bun install --frozen-lockfile` para garantir uma árvore de dependências íntegra e consistente com o `bun.lock`.
   - Confirmar que o chunk do Vite (`dep-C6uTJdX2.js`) e os chunks do Tailwind existem após a reinstalação.

4. **Validar**
   - `bun run build:dev` (esperado: 2083 módulos, exit 0).
   - `vite build` (build de produção, exit 0).
   - Verificar `/tmp/observability/build-errors.log` para uma entrada "build OK" limpa.
   - Confirmar dev server em `http://localhost:8080/` retornando 200.

## Nota
Esta limpeza resolve os sintomas (cache sujo + instalação parcial). Se os erros recorrentes continuarem aparecendo no log da plataforma após a reinstalação, o passo seguinte seria revisar o `bun.lock`/`package.json` `overrides` para garantir que o `bun install` da plataforma instale o conjunto completo de pacotes (não apenas ~23).

# Club Satoshi

Sitio web oficial de [Club Satoshi](https://clubsatoshi.com), comunidad bitcoiner de Tucumán y el Norte Argentino. Construido con [Next.js](https://nextjs.org).

## Primeros pasos

Instalá las dependencias y levantá el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Colaborar con contenido

Los artículos y guías del sitio se encuentran en `content/resources/` como archivos `.mdx`. Cualquier persona puede contribuir creando o mejorando recursos educativos sobre Bitcoin.

### Estructura de archivos

```
content/
└── resources/
    ├── que-es-bitcoin.mdx
    ├── mi-primer-compra-satoshis.mdx
    ├── mi-primer-billetera-bitcoin.mdx
    ├── lightning-network.mdx
    ├── billeteras-frias.mdx
    └── glosario-bitcoin.mdx
```

### Cómo crear un nuevo artículo

1. Crea un archivo `.mdx` en `content/resources/` con un nombre en minúsculas y guiones, por ejemplo: `como-funciona-el-halving.mdx`.

2. Agregá el **frontmatter** al inicio del archivo con los siguientes campos:

```mdx
---
title: "Título del artículo"
category: "fundamentos"       # fundamentos | guias | herramientas
description: "Descripción breve que aparece en las tarjetas del sitio."
date: "2026-03-01"            # formato YYYY-MM-DD
author: "Tu nombre o alias"
type: "article"               # article | guide
level: "beginner"             # beginner | intermediate | advanced
---

Contenido del artículo en Markdown...
```

3. Escribí el contenido usando Markdown estándar: títulos (`##`, `###`), listas, tablas, citas (`>`), negritas, etc.

4. Para que aparezca listado en la sección de Recursos del sitio, agregá una tarjeta en `src/components/Resources.tsx` apuntando al `href` correspondiente.

### Buenas prácticas

- Escribí en español argentino, con un tono didáctico y accesible.
- Evitá jerga técnica sin explicación previa.
- Preferí ejemplos concretos y locales cuando sea posible.
- Revisá que el `date` del frontmatter esté actualizado.

---

## Despliegue

El sitio se despliega automáticamente en [Vercel](https://vercel.com) desde la rama `main`.

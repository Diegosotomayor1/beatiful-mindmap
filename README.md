# MindMap con MindElixir en React + TypeScript + Vite

Este proyecto es un ejemplo básico de una aplicación de Mind Mapping (mapa mental) usando **MindElixir** en un entorno de desarrollo moderno. Está configurado para utilizar **React** con **TypeScript**, **Vite** para el desarrollo rápido y **SWC** para la optimización de compilación. Además, incluye **TailwindCSS** y componentes de **shadcn/ui** para mejorar la experiencia de usuario.

## Tecnologías Principales

- **MindElixir**: Librería de mapas mentales interactivos y personalizables.
- **React + TypeScript**: Para una construcción de interfaz de usuario robusta y tipada.
- **Vite**: Herramienta de desarrollo rápida con HMR (Hot Module Replacement) y optimización de compilación.
- **SWC**: Compilación rápida con soporte para Fast Refresh.
- **TailwindCSS**: Framework de CSS para un estilizado rápido y consistente.
- **shadcn/ui**: Biblioteca de componentes accesibles y estilizados para una interfaz de usuario intuitiva.

## Características de la Aplicación

Este proyecto de mapa mental con **MindElixir** permite:

- Crear y visualizar mapas mentales de forma interactiva.
- Personalizar nodos con contenido y resúmenes dinámicos.
- Usar **TailwindCSS** para aplicar estilos de forma rápida y **shadcn/ui** para mostrar información en `Popover` o `Dialog` cuando el usuario interactúa con los nodos.

Este ejemplo es ideal para quienes buscan una base sólida para desarrollar aplicaciones con mapas mentales usando **MindElixir** y las herramientas modernas de frontend.

## Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v14 o superior
- [pnpm](https://pnpm.io/): Usaremos `pnpm` como gestor de paquetes.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mindmap-vite-react.git
   cd mindmap-vite-react
   ```


1. Instala las dependencias:

   ```
   bash
   ```

   Copiar código

   `pnpm install`

2. Inicia el servidor de desarrollo:

   ```
   bash
   ```

   Copiar código

   `pnpm dev`

   El servidor de desarrollo estará disponible en `http://localhost:5173`.

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción en la carpeta `dist`.
- `pnpm preview`: Previsualiza el proyecto construido en un servidor local.
- `pnpm lint`: Ejecuta ESLint para detectar problemas en el código.

## Configuración de ESLint

Para mantener un código de alta calidad y asegurar que aprovechemos el tipado de TypeScript, se recomienda expandir la configuración de ESLint a una versión más consciente del tipo.

1. **Configura** `parserOptions` para habilitar las reglas de ESLint específicas de tipos:

   ```
   js
   ```

   Copiar código

   `export default tseslint.config({ languageOptions: { parserOptions: { project: ['./tsconfig.node.json', './tsconfig.app.json'], tsconfigRootDir: import.meta.dirname, }, }, })`

2. **Reemplaza** `tseslint.configs.recommended` con `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked` para un análisis de tipo más exhaustivo. Opcionalmente, agrega `...tseslint.configs.stylisticTypeChecked` para reglas estilísticas avanzadas.

3. **Agrega el plugin de React** [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualiza el archivo `eslint.config.js`:

   ```
   js
   ```

   Copiar código

   `// eslint.config.js import react from 'eslint-plugin-react' export default tseslint.config({ settings: { react: { version: '18.3' } }, plugins: { react, }, rules: { ...react.configs.recommended.rules, ...react.configs['jsx-runtime'].rules, }, })`

## Estructura del Proyecto

```
plaintext
```

Copiar código

`mindmap-vite-react/ ├── public/ # Archivos públicos (favicon, manifest, etc.) ├── src/ │ ├── components/ # Componentes reutilizables de React │ ├── App.tsx # Componente raíz de la aplicación │ ├── main.tsx # Punto de entrada de la aplicación │ ├── types/ # Definición de tipos personalizados │ └── styles/ # Archivos de estilos globales ├── .eslintrc.js # Configuración de ESLint ├── tsconfig.json # Configuración de TypeScript ├── vite.config.ts # Configuración de Vite └── README.md # Documentación del proyecto`

## Uso de MindElixir

Este proyecto utiliza MindElixir para renderizar mapas mentales. En `src/components/MindElixirReact.tsx` se implementa la funcionalidad básica de un mapa mental. Puedes modificar el objeto de datos `MindElixirDataWithSummary` para personalizar el contenido de los nodos.

Ejemplo básico de datos:

```
typescript
```

Copiar código

`export const historyofPeruData: MindElixirDataWithSummary = { nodeData: { id: "root", topic: "Historia del Perú 🇵🇪", summary: "Exploración de la historia del Perú, desde tiempos antiguos hasta la era moderna.", children: [ { id: "introduccion", topic: "Introducción 🌎", summary: "Información básica sobre Perú y sus características geográficas.", }, // Otros nodos... ], }, };`

## Personalización de la UI con TailwindCSS y shadcn/ui

La aplicación está estilizada con **TailwindCSS** para un diseño rápido y consistente. Los componentes interactivos como `Popover` o `Dialog` son provistos por **shadcn/ui** para mejorar la experiencia de usuario en los nodos de MindElixir.

Ejemplo de uso de `Popover` para mostrar resúmenes de nodos en el mapa mental:

```
tsx
```

Copiar código

`<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}> <PopoverTrigger asChild> <div style={{ position: 'absolute', left: popoverPosition.x, top: popoverPosition.y }}></div> </PopoverTrigger> <PopoverContent> <p>{selectedSummary}</p> </PopoverContent> </Popover>`

## Contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
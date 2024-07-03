interface KTLayout {
  init(): void;
}

declare module './theme/app/layouts/demo1.js' {
  const KTLayout: KTLayout;
  export default KTLayout;
}
import style from "../style/style2.module.css";

export function MyContainer() {
  return (
    <div>
      <h1 className={`${style.boxClass} ${style.error} ${style.note}`}>
        Lorem ipsum dolor sit amet.1
      </h1>
      <h1 className={[style.boxClass, style.error, style.note].join(" ")}>
        Lorem ipsum dolor sit amet.2
      </h1>
    </div>
  );
}

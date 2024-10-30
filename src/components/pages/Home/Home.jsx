import "./Home.css";
import {Acercade} from '../../common/Acercade/Acercade'
export function Home() {
  return (
    <>
      <div className="banner text-white">
      <p>
        ¡Bienvenido a Finanzas en Orden! Descubre la manera más sencilla y
        efectiva de gestionar tus gastos con nuestra aplicación. Sabemos que
        controlar tus finanzas puede ser un desafío, pero con nuestras
        herramientas intuitivas y funcionalidades personalizadas, llevar un
        registro de tus ingresos y gastos nunca ha sido tan fácil. 
      </p>
      <button className="btn btn-outline-success">ver mas</button>
      </div>
      <Acercade></Acercade>
    </>
  );
}

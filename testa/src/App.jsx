import React from "react";
import bjornoro from './images/bjornoro.png';
import selmitoro from './images/selmitoro.png';
import ebbinoro from './images/ebbinoro.png';

function App() {
  return (
    <div>
      <header className="bg-red-400 mx-auto">
        <div className="max-w-[80%] flex justify-between mx-auto py-10">
          <h1 className="text-5xl font-serif">Testar lite</h1>
          <nav className="flex items-center justify-center space-x-4 font-bold text-2xl">
            <a
              className="hover:text-gray-600 border-b-2 hover:border-gray-600 border-black"
              href="#"
            >
              Test 1
            </a>
            <a
              className="hover:text-gray-600 border-b-2 hover:border-gray-600 border-black"
              href="#"
            >
              Test 2
            </a>
            <a
              className="hover:text-gray-600 border-b-2 hover:border-gray-600 border-black"
              href="#"
            >
              Test 3
            </a>
            <a
              className="hover:text-gray-600 border-b-2 hover:border-gray-600 border-black"
              href="#"
            >
              Test 4
            </a>
          </nav>
        </div>
      </header>

      <div className="bg-black">
        <section className="bg-black text-white flex py-16 max-w-[80%] mx-auto">
          <article>
            <h3 className="text-2xl py-5">Testar lite mer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius auctor facilisis. Nulla condimentum gravida neque vitae
              varius. Donec mi sapien, accumsan vel purus vel, auctor congue nisi.
              Integer non erat volutpat, sagittis libero et, lacinia dolor.
              Vestibulum quis nisl non felis egestas ornare. Etiam ut erat vel dui
              tempor suscipit sed ut odio. Mauris aliquet et magna faucibus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce dictum eros sed nibh suscipit aliquet. Mauris eget rutrum
              turpis.
            </p>
          </article>
          <article>
            <h3 className="text-2xl py-5">Testar lite mer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius auctor facilisis. Nulla condimentum gravida neque vitae
              varius. Donec mi sapien, accumsan vel purus vel, auctor congue nisi.
              Integer non erat volutpat, sagittis libero et, lacinia dolor.
              Vestibulum quis nisl non felis egestas ornare. Etiam ut erat vel dui
              tempor suscipit sed ut odio. Mauris aliquet et magna faucibus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce dictum eros sed nibh suscipit aliquet. Mauris eget rutrum
              turpis.
            </p>
          </article>
          <article>
            <h3 className="text-2xl py-5">Testar lite mer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius auctor facilisis. Nulla condimentum gravida neque vitae
              varius. Donec mi sapien, accumsan vel purus vel, auctor congue nisi.
              Integer non erat volutpat, sagittis libero et, lacinia dolor.
              Vestibulum quis nisl non felis egestas ornare. Etiam ut erat vel dui
              tempor suscipit sed ut odio. Mauris aliquet et magna faucibus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce dictum eros sed nibh suscipit aliquet. Mauris eget rutrum
              turpis.
            </p>
          </article>
        </section>
      </div>

      <div className="bg-black">
        <figure className="flex justify-evenly py-10 items-center">
          <img
            className="w-64 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            src={bjornoro}
            alt="björn som totoro"
          />
          <img
            className="w-64 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            src={ebbinoro}
            alt="ebba som totoro"
          />
          <img
            className="w-64 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            src={selmitoro}
            alt="selma som totoro"
          />
        </figure>
      </div>

      <footer className="bg-red-400 flex justify-evenly py-5">
        <section>
          <p>&copy; Testa 2024</p>
        </section>
        <section>
          <p>Alla rättigheter reserverade</p>
        </section>
        <section>
          <p>Test av Karin Ekenberg</p>
        </section>
      </footer>
    </div>
  );
}

export default App;

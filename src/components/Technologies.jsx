// TODO fix distance between elements
export const Technologies = () => {
  return (
    <>
      <article>
        <h1 className="text-primary text-8xl mt-20 ml-auto mr-auto w-fit text-6xl font-medium font-general">
          - TECHNOLOGIES -
        </h1>

        <div className="flex gap-40 ml-[25dvw] mt-20 mb-20">
          <div>
            <h2 className="text-4xl font-grotesk">
              My tech <span className="font-extrabold text-accent">stack</span>
            </h2>
            <p className="w-[25dvw] font-general text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              dignissimos voluptates numquam recusandae ullam cupiditate
              asperiores possimus harum obcaecati incidunt? Facere nam omnis
              accusantium voluptas odio eos cumque beatae ullam!
            </p>
          </div>
          <div>
            <ul className="font-general font-bold text-accent text-2xl list-disc">
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Figma</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>C++</li>
              <li>BASH</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

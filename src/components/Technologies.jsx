// TODO fix distance between elements
export const Technologies = () => {
  return (
    <>
      <article>
        <h1 className="text-primary text-8xl mt-20 ml-auto mr-auto w-fit text-6xl font-medium font-general">
          - TECHNOLOGIES -
        </h1>

        <div className="flex gap-[20dvw] ml-[25dvw] mt-20 mb-20">
          <div>
            <h2 className="text-4xl font-grotesk">
              My tech <span className="font-extrabold text-accent">stack</span>
            </h2>
            <p className="w-[25dvw] font-general text-xl">
              I have learned many skills over the years. I have the most
              experience in Python and JavaScript, while still being comfortable
              with the other ones. I learn new languages and adapt to changes
              quickly.
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

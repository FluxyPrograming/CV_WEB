export const MyProfile = () => {
  return (
    <>
      <article>
        <h1 className="text-primary text-8xl m-auto w-fit text-6xl font-medium font-general">
          - MY PROFILE -
        </h1>
        <div className="flex gap-40 mt-20 mb-20">
          <img
            src="https://via.placeholder.com/800x950"
            className="justify-self-start rounded-r-xl"
            alt=""
          />
          <div className="flex flex-col w-[40dvw]">
            <pre className="text-4xl font-grotesk">
              {"A brief intro ...\n"}
              <span className="font-extrabold text-accent">who </span>am I?
            </pre>
            <p className="font-general text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              magnam, beatae consequatur asperiores deserunt sapiente fugit qui
              nemo voluptate error perspiciatis pariatur eos architecto neque!
              Vel animi expedita exercitationem fugit.
            </p>
            <br />
            <p className="font-general text-xl">
              A harum eius non praesentium quae vel beatae ducimus ut minima
              incidunt sit nulla debitis non ipsam rerum et dolorem voluptatem.
              Nam dolores voluptas aut saepe voluptate sed error sint non
              suscipit magni ea perferendis eligendi est galisum incidunt et
              fugiat dolor!
            </p>
            <br />
            <p className="font-general text-xl">
              Aut voluptatibus suscipit ad blanditiis architecto vel dolores
              eveniet in debitis deleniti est velit aspernatur quo officia
              consequatur. Ut voluptatem sapiente sit odit debitis non
              voluptatum corrupti et minus ipsa et nostrum galisum.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export const ContactMe = () => {
  return (
    <>
      <article>
        <h1 className="text-primary text-8xl mt-20 ml-auto mr-auto w-fit text-6xl font-medium font-general">
          - CONTACT -
        </h1>
        <div className="w-[50dvw] m-auto mt-[5dvh]">
          <form action="" method="post" className="flex flex-col">
            <input
              type="text"
              placeholder="  Name"
              className="m-5 bg-secondary text-main-bg p-2 font-general text-base rounded-xl w-[25%]"
              required
            />
            <input
              type="email"
              id="ndIn"
              required
              placeholder="  Email"
              className="m-5 bg-primary text-main-bg p-2 font-general text-base rounded-xl w-[55%]"
            />
            <textarea
              cols="20"
              rows="15"
              placeholder="  Your message"
              className="m-5 rounded-xl bg-secondary text-main-bg p-2 font-general text-base resize-none w-[75%]"
            ></textarea>
            <input
              type="submit"
              className="bg-main-text text-accent font-grotesk text-xl font-bold rounded-xl p-2 w-[200px] m-5"
              value="Ping me"
            />
          </form>
        </div>
      </article>
    </>
  );
};

import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
             Md Seraj
        </strong>{" "}
        a proficient full stack developer with a robust skill set spanning both
        front-end and back-end technologies. With a passion for building
        dynamic, responsive, and user-friendly web applications, Seraj excels in
        crafting seamless digital experiences.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
        Front-End:  Proficient in HTML, CSS, TailwindCSS, Bootstrap, and JavaScript.
        Skilled in React.js for building modern, interactive user interfaces.<br />
        Back-End: Experienced with Node.js and Express.js for server-side development. 
        Knowledgeable in database management with MongoDB and Mongoose Atlas.<br />
        Tools & Workflow: Comfortable with Git, GitHub, Postman, and RESTful API development.<br />
        Other Skills: Strong grasp of C++ and data structures & algorithms (DSA) for problem-solving and efficient coding.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Projects & Experience:
      </h2>
      <p>
        Successfully developed and deployed numerous full-stack applications,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions within tight deadlines. Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <span>
        Md Seraj is dedicated to leveraging his expertise to contribute to
        innovative projects and drive technological advancements. Whether
        working on front-end interfaces or back-end logic, he is passionate
        about delivering exceptional digital solutions that meet user needs and
        exceed client expectations.
      </span>
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        Beyond his professional journey, Seraj enjoys playing cricket,traveling, and reading.
        He isn’t driven by any single inspiration but  deeply admires his <strong>mother,</strong>
        who is his biggest source of strength and motivation. Her unwavering support and encouragement
       fuel his determination to achieve his goals.<br />Seraj believes in self-improvement and continuously
       pushes himself to grow, striving  for growth, excellence, and mastery in his field.
      </p>
    </div>
  );
}

export default About;
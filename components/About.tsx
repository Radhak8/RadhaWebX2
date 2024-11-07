
import { motion } from 'framer-motion';
import SkillBar from "./SkillBar";

export default function About() {
  const skills = ['Web Development', 'UI/UX Design', 'Data Science', 'Machine Learning', 'Cloud Computing'];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Hello! I'm [Your Name], a passionate [Your Profession/Interest] based in [Your Location]. 
                With a keen interest in cutting-edge technologies, I strive to create innovative solutions 
                that make a positive impact on the world.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                My journey in tech has been an exciting adventure, filled with continuous learning and 
                growth. I believe in the power of technology to transform lives and businesses.
              </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
              <SkillBar skill="Web Development" level={90} />
              <SkillBar skill="UI/UX Design" level={85} />
              <SkillBar skill="React" level={88} />
              <SkillBar skill="Node.js" level={82} />
            </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-700 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
              <SkillBar skill="Web Development" level={90} />
              <SkillBar skill="UI/UX Design" level={85} />
              <SkillBar skill="React" level={88} />
              <SkillBar skill="Node.js" level={82} />
            </div>
              </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
              <SkillBar skill="Web Development" level={90} />
              <SkillBar skill="UI/UX Design" level={85} />
              <SkillBar skill="React" level={88} />
              <SkillBar skill="Node.js" level={82} />
            </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
              <SkillBar skill="Web Development" level={90} />
              <SkillBar skill="UI/UX Design" level={85} />
              <SkillBar skill="React" level={88} />
              <SkillBar skill="Node.js" level={82} />
            </div>
          </div>
        </motion.div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
              <SkillBar skill="Web Development" level={90} />
              <SkillBar skill="UI/UX Design" level={85} />
              <SkillBar skill="React" level={88} />
              <SkillBar skill="Node.js" level={82} />
            </div>
      </div>
    </section>
  );
}

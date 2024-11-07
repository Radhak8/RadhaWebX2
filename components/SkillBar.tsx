import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-400">{skill}</span>
        <span className="text-sm font-medium text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

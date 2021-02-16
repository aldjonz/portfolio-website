import styles from '../../styles/Skills.module.css';
import TechIcon from '../UI/techIcon';

const Skills = () => {

    return (
        <div>
            <div className={styles.techContainer}>
                <h1>Skills</h1>
                <div className={styles.techWrapper}>
                    <TechIcon 
                        title="HTML5"
                        img='/SkillsIcons/html5.svg'
                        alt="HTML5"
                        delay="0"
                    />
                    <TechIcon 
                        title="CSS3"
                        img='SkillsIcons/css3.svg'
                        alt="CSS3"
                        delay="150"
                    />
                    <TechIcon 
                        title="JavaScript"
                        img='SkillsIcons/javascript.svg'
                        alt="JavaScript"
                        delay="300"
                    />
                    <TechIcon 
                        title="React &amp; React Native"
                        img='SkillsIcons/react.svg'
                        alt="React &amp; React-Native"
                        delay="450"
                    />
                    <TechIcon 
                        title="NextJS"
                        img='SkillsIcons/next-js.svg'
                        alt="NextJS"
                        delay="500"
                    />
                    <TechIcon 
                        title="Tailwind CSS"
                        img='SkillsIcons/tailwind-css.svg'
                        alt="HTML5"
                        delay="650"
                    />
                    <TechIcon 
                        title="Git"
                        img='SkillsIcons/git.svg'
                        alt="Git"
                        delay="800"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
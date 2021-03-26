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
                    />
                    <TechIcon 
                        title="CSS3"
                        img='SkillsIcons/css3.svg'
                        alt="CSS3"
                    />
                    <TechIcon 
                        title="JavaScript"
                        img='SkillsIcons/javascript.svg'
                        alt="JavaScript"
                    />
                    <TechIcon 
                        title="React &amp; React Native"
                        img='SkillsIcons/react.svg'
                        alt="React &amp; React-Native"
                    />
                    <TechIcon 
                        title="NextJS"
                        img='SkillsIcons/next-js.svg'
                        alt="NextJS"
                    />
                    <TechIcon 
                        title="Tailwind CSS"
                        img='SkillsIcons/tailwind-css.svg'
                        alt="HTML5"
                    />
                    <TechIcon 
                        title="Bootstrap 4"
                        img='SkillsIcons/bootstrap-4.svg'
                        alt="Bootstrap 4"
                    />
                    <TechIcon 
                        title="Git"
                        img='SkillsIcons/git.svg'
                        alt="Git"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
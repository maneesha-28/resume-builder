import React from "react";
import { ArrowDown } from "react-feather";
import styles from "./body.module.css";
//hiii

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp:"Work Experience",
        project:"Projects",
        education:"Education",
        achievements:"Achievements",
        summary:"Summary",
        other:"Others",

    };
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            style={{ backgroundColor: item }}
                            className={styles.color}

                        />
                    ))}
                </div>
                <button>Download <ArrowDown/>

                </button>
            </div>
            <div className={styles.main}>
                <editor sections={sections}/>
            </div>
        </div>
    );
}
export default Body;
import React, {useMemo, useState} from "react";

import {Input} from "@app/Atoms";
import {includesNormalized} from "@app/shared";

import {Icon, IconProps, IconsNames} from "../..";

import styles from "./IconSearch.module.scss";

const IconSearch = ({...rest}: IconProps) => {
    const [name, setName] = useState("");

    const getIconNameKey = (value: IconsNames) => {
        const entry = Object.entries(IconsNames).find(([, val]) => val === value);
        return entry ? entry[0] : "";
    };

    const compareByName = (comparisonName: string): boolean => {
        return !name || includesNormalized(name, comparisonName);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filteredIcons = useMemo(() => Object.values(IconsNames).filter((value) => compareByName(value)), [name]);

    const handleSearch = (searchName: string) => {
        setName(searchName);
    };

    return (
        <section className={styles.iconSearch}>
            <div className={styles.searchContainer}>
                <Input handleChange={handleSearch} label="Buscar" value={name} placeholder="IconName" data-testid="icon-search-input" />
            </div>
            <div className={styles.iconsContainer}>
                {filteredIcons.map((iconName) => (
                    <div key={iconName} className={styles.iconContainer}>
                        <Icon {...rest} name={iconName} />
                        <span className={styles.iconName}>{getIconNameKey(iconName)}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IconSearch;

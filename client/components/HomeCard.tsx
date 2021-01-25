import React, { FC, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { faDumbbell, faUtensils, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HomeCardOption = "workouts" | "food" | "calendar";

type Props = {
    title: HomeCardOption;
};

export const HomeCard: FC<Props> = ({ title }) => {
    const history = useHistory();

    const handleSelect = () => {
        history.push(`/${title}`)
    }

    const Icon = useMemo(() => {
        switch (title) {
            case "workouts":
                return (<FontAwesomeIcon icon={faDumbbell} />)
            case "food":
                return (<FontAwesomeIcon icon={faUtensils} />)
            case "calendar":
                return (<FontAwesomeIcon icon={faCalendar} />)
            default:
                throw new Error(`Invalid title was provided: ${title}`);
        }
    }, [title]);

    return (
        <div className="HomeCard" onClick={handleSelect}>
            {title.toUpperCase()}
            {Icon}
        </div>
    )
}
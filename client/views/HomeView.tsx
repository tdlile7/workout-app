import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../components/Header";
import { HomeCard } from "../components/HomeCard";

type Props = RouteComponentProps & {};

export const HomeView: FC<Props> = () => {
    const renderCard = () => {

    };

    return (
        <div className="HomeView">
            <Header />
            <div className="HomeView-Content">
                <HomeCard title="workouts" />
                <HomeCard title="food" />
                <HomeCard title="calendar" />
            </div>
        </div>
    )
}
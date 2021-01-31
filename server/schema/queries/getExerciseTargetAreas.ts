import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQlContext } from "../..";
import { GymLockerDb } from "../../services/GymLockerDb";

const exerciseTargetAreas: GymLockerDb.ExerciseTargetArea[] = [
    "Shoulders",
    "Back",
    "Chest",
    "Biceps",
    "Triceps",
    "Glutes",
    "Quads",
    "Calves",
    "Neck",
    "Triceps",
    "Abs",
    "Hamstrings",
];

export const getExerciseTargetAreas: GraphQLFieldConfig<null, GraphQlContext> = {
    type: new GraphQLNonNull(GraphQLList(GraphQLString)),
    description: "Returns list of target areas that an exercise can target",
    resolve() {
        return exerciseTargetAreas;
    }
} 
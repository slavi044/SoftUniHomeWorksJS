function ContructionCrew(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }

    console.log(obj.experience * obj.weight * 0.1);
    return obj;
}

console.log(ContructionCrew(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
}));

console.log(ContructionCrew(
    { weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true 
}));
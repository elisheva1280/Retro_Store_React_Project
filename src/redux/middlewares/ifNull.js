export const ifNull = store => next => action => {
    if (action.type === "SEARCH") {
        return next(action); // לא לבדוק name/image – זו פעולה שונה
    }

    if (action.payload && action.payload.name === undefined && action.payload.image === undefined) {
        console.log('שם ריק או לא מוגדר');
        return;
    }

    next(action);
};

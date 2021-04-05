const day = new Date().getDay()
const dayEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export const getDayOfWeek = () :string => {
    return dayEnglish[day]
}

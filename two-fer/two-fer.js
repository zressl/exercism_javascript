export function twoFer(name) {
export const twoFer = (name) => {
    const finalName = name ? name : "you"; 
    return  `One for ${finalName}, one for me.`;
};

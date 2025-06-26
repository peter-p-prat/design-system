export const removeSpecialCharacters = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    // Only accept numbers from 0-9
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    target.value = target.value.replace(/\D/g, "");
    // Replace any special character
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    target.value = target.value.replace(/[ "#$%&'()*+,./:<>?\\{}~]/g, "");
};

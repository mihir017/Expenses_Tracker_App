export const StoreUserAccounts = ({ userName, email, password }) => {
    const userDetails = { userName, email, password };
    if (!localStorage.getItem("expensesTrackerUserAccounts")) {
        localStorage.setItem(
            "expensesTrackerUserAccounts",
            JSON.stringify([userDetails])
        );
        return "SuccessFully SignUp.";
    } else {
        let userAccounts = JSON.parse(
            localStorage.getItem("expensesTrackerUserAccounts")
        );
        const userExist = userAccounts.filter(
            (account) => account.email === userDetails.email
        );
        if (userExist.length > 0) {
            localStorage.setItem(
                "expensesTrackerUserAccounts",
                JSON.stringify([...userAccounts, userDetails])
            );
            return "SuccessFully SignUp";
        } else {
            return "User Email Already Exists";
        }
    }
};

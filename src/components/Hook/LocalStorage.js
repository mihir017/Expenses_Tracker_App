export const StoreUserAccounts = ({ userName, email, password }) => {
    const userDetails = {
        userName,
        email,
        password,
        balanceData: {
            totalBalance: 0,
            income: 0,
            expenses: 0,
            history: [],
        },
    };
    if (!localStorage.getItem("expensesTrackerUserAccounts")) {
        localStorage.setItem(
            "expensesTrackerUserAccounts",
            JSON.stringify([userDetails])
        );
        return "success";
    } else {
        let userAccounts = JSON.parse(
            localStorage.getItem("expensesTrackerUserAccounts")
        );
        const userExist = userAccounts.filter(
            (account) => account.email === userDetails.email
        );
        if (userExist.length === 0) {
            localStorage.setItem(
                "expensesTrackerUserAccounts",
                JSON.stringify([...userAccounts, userDetails])
            );
            return "success";
        } else {
            return "error";
        }
    }
};

export const userSignIn = ({ email, password }) => {
    // const loginUser = { email, password };
    let userAccounts = JSON.parse(
        localStorage.getItem("expensesTrackerUserAccounts")
    );
    const findUser = userAccounts.find(
        (account) => account.email === email && account.password === password
    );
    if (findUser) {
        localStorage.setItem(
            "expensesTrackerLoginUser",
            JSON.stringify(findUser)
        );
        return "success";
    } else {
        return "error";
    }
};

export const updateUserData = (user, data) => {
    let userAccounts = JSON.parse(
        localStorage.getItem("expensesTrackerUserAccounts")
    );

    userAccounts.map((account) => {
        if (account.email === user.email) {
            return { ...account, balanceData: data };
        } else {
            return account;
        }
    });
};

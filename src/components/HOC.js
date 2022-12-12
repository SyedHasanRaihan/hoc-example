import React from "react";

const hoc = (WrappedComp) => {
    const NewComp = () => {
        const [loggedIn, setLoggedIn] = React.useState(false);

        React.useEffect(() => {
            setLoggedIn(true);
        }, []);

        return loggedIn ? (
            <WrappedComp text="Logged In" />
        ) : (
            <p>Not logged In</p>
        );
    };
    return NewComp;
};

export default hoc;

export default { 
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testEnvironment: "node",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

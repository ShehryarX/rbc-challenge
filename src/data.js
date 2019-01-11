const data = [
  {
    over_draft: "<0",
    credit_usage: "6",
    credit_history: "critical/other existing credit",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "48",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "12",
    credit_history: "critical/other existing credit",
    purpose: "education",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "42",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "for free",
    job: "skilled",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "delayed previously",
    purpose: "new car",
    housing: "for free",
    job: "skilled",
    num_dependents: "2",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "36",
    credit_history: "existing paid",
    purpose: "education",
    housing: "for free",
    job: "unskilled resident",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "36",
    credit_history: "existing paid",
    purpose: "used car",
    housing: "rent",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "30",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "own",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "new car",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "48",
    credit_history: "existing paid",
    purpose: "business",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "15",
    credit_history: "existing paid",
    purpose: "new car",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "24",
    credit_history: "critical/other existing credit",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "30",
    credit_history: "no credits/all paid",
    purpose: "business",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "used car",
    housing: "for free",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "9",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "6",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "rent",
    job: "skilled",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "10",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "rent",
    job: "unskilled resident",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "6",
    credit_history: "all paid",
    purpose: "new car",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "new car",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "24",
    credit_history: "no credits/all paid",
    purpose: "business",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: ">=200",
    credit_usage: "12",
    credit_history: "all paid",
    purpose: "radio/tv",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "7",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "60",
    credit_history: "delayed previously",
    purpose: "business",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "18",
    credit_history: "existing paid",
    purpose: "business",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "48",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "rent",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: ">=200",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "own",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "45",
    credit_history: "critical/other existing credit",
    purpose: "radio/tv",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "48",
    credit_history: "critical/other existing credit",
    purpose: "education",
    housing: "for free",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: ">=200",
    credit_usage: "18",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "18",
    credit_history: "delayed previously",
    purpose: "repairs",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "2",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "30",
    credit_history: "critical/other existing credit",
    purpose: "used car",
    housing: "rent",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "48",
    credit_history: "critical/other existing credit",
    purpose: "used car",
    housing: "for free",
    job: "unskilled resident",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "11",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "own",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "36",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "<0",
    credit_usage: "6",
    credit_history: "existing paid",
    purpose: "used car",
    housing: "rent",
    job: "unemp/unskilled\nnon res",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "11",
    credit_history: "critical/other existing credit",
    purpose: "new car",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "12",
    credit_history: "existing paid",
    purpose: "radio/tv",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  },
  {
    over_draft: "no\nchecking",
    credit_usage: "36",
    credit_history: "delayed previously",
    purpose: "business",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "0<=X<200",
    credit_usage: "36",
    credit_history: "delayed previously",
    purpose: "business",
    housing: "own",
    job: "high qualif/self\nemp/mgmt",
    num_dependents: "1",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "21",
    credit_history: "all paid",
    purpose: "new car",
    housing: "own",
    job: "unskilled resident",
    num_dependents: "2",
    class: "bad"
  },
  {
    over_draft: "<0",
    credit_usage: "24",
    credit_history: "existing paid",
    purpose: "furniture/equipment",
    housing: "own",
    job: "skilled",
    num_dependents: "1",
    class: "good"
  }
];

export default data;

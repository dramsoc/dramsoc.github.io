type CommitteeRoleListing = {
    name: string;
    email: string;
};

type CommitteeListing = {
    name: string;
    roles: CommitteeRoleListing[];
    image?: string;
};

export const committeeYearHeader: string = "26-27";

export const committee: CommitteeListing[] = [
    {
        name: "Jocelyn Yue",
        roles: [
            {
                name: "President",
                email: "president@dramsoc.org"
            }
        ],
    },
    {
        name: "Atom Lucenet",
        roles: [
            {
                name: "Vice President",
                email: "vice@dramsoc.org"
            }
        ]
    },
    {
        name: "Caden Wong",
        roles: [
            {
                name: "Treasurer",
                email: "treasurer@dramsoc.org"
            }
        ]
    },
    {
        name: "Jay Etim",
        roles: [
            {
                name: "Honorary Secretary",
                email: "honsec@dramsoc.org"
            }
        ]
    },
    {
        name: "George Robertson",
        roles: [
            {
                name: "Technical Director",
                email: "techdir@dramsoc.org"
            }
        ]
    },
    {
        name: "Benet Horan",
        roles: [
            {
                name: "Acting Director",
                email: "acting@dramsoc.org"
            }
        ]
    },
    {
        name: "Issac Hsiung",
        roles: [
            {
                name: "Lighting Director",
                email: "lighting@dramsoc.org"
            }
        ]
    },
    {
        name: "Charlie Theobald",
        roles: [
            {
                name: "Sound Director",
                email: "sound@dramsoc.org"
            }
        ]
    },
    {
        name: "Alex Vasilev",
        roles: [
            {
                name: "Set & Props Director",
                email: "spc@dramsoc.org"
            }
        ]
    },
    {
        name: "Anya Chaudhary",
        roles: [
            {
                name: "Costume & Make-up Director",
                email: "costumes@dramsoc.org"
            }
        ]
    },
    {
        name: "Abbas Schwarz",
        roles: [
            {
                name: "Systems Administrator",
                email: "sysadmin@dramsoc.org"
            }
        ]
    },
    {
        name: "Elana Todd-Miller",
        roles: [
            {
                name: "Social Secretary",
                email: "social@dramsoc.org"
            }
        ]
    },
    {
        name: "Timothy Spawforth",
        roles: [
            {
                name: "Publicity Officer",
                email: "publicity@dramsoc.org"
            }
        ]
    },
    {
        name: "Aaron Simpson",
        roles: [
            {
                name: "Ordinary Committee Member",
                email: "ocm@dramsoc.org"
            }
        ]
    },
    {
        name: "Mistifer Cat",
        roles: [
            {
                name: "Official Mascot",
                email: "mystifercat@dramsoc.org"
            }
        ]
    }
];

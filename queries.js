export const getIndexPageData = `{
    me(id: "6DJvlbWzPKLgZvCzVDRzos") {
        firstName
        lastName
        name
        title
        short { json }
        long { json }
        contacts: contactsCollection {
            items {
                ... on Contact {
                    medium
                    url
                }
            }
        }
    }
    projects: projectCollection(order: startdate_DESC) {
        items {
            title
            titleShort
            client
            description { json }
            me { json }
            role      
            startdate
            enddate
            city
            tags
            asset {
                fileName
                url
            }
        }
    }
}`

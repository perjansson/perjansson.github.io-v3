export const getIndexPageData = `{
    me(id: "6DJvlbWzPKLgZvCzVDRzos") {
        firstName
        lastName
        name
        title
        profileImage {
            fileName
            url
        }
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
            sys {
                id
            }
            titleShort
            client
            role
            asset {
                url
            }
        }
    }
}`

export const getAllProjects = `{
    projects: projectCollection(order: startdate_DESC) {
        items {
            sys {
                id
            }
        }
    }
}`

export const getProjectPageData = (id: string) => `{
    project(id: "${id}") {
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
            url
        }
        assetPlaceholder
    }
}`

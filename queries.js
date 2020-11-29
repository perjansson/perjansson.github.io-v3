export const getIndexPageData = `{
    me(id: "6DJvlbWzPKLgZvCzVDRzos") {
        name
        title
            contactsCollection {
            items {
            ... on Contact {
                medium
                url
            }
            }
        }
    }
    projectCollection(order: startdate_DESC) {
        items {
            title
            description { json }
            me { json }
            role
            startdate
            assetCollection {
                items {
                    fileName
                    url
                }
            }
        }
    }
}`

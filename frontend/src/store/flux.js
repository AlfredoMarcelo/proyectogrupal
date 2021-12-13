const getState = ({ getStore, getActions, setStore}) => {
    return {
        store: {
            apiURL: 'http://127.0.0.1:5000/ ',
            contacts: null
        },
        actions: {
            getContacts: async (url) => {
                try {
                    const response = await fetch(url+'/api/contacts');
                    if (!response.ok) throw new Error('Error al consultar contactos');
                    const data = await response.json();

                    setStore({
                        contacts: data
                    })

                } catch (error) {
                    console.log(error)
                    
                }
            }
        }
    }
}

export default getState;
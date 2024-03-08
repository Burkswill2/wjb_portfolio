export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string',
            initialValue: 'edf2f8'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}
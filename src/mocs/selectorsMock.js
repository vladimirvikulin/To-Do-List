export const loadedMockObject = {
    groups: {
        items: [
            {
                _id: '646a8f4b85ba31626f6a7f16',
                title: 'group1',
                tasks: [
                    {
                        title: 'task1',
                        status: false,
                        priority: false,
                        _id: '646a9619cab5121b1e35b3cd'
                    },
                    {
                        title: 'task2',
                        status: false,
                        priority: true,
                        _id: '646a8f4e85ba31626f6a7f04'
                    },
                ],
                completed: 0,
                notCompleted: 2,
                user: '64661e65fa90e3afa0b06a64',
                createdAt: '2023-05-21T21:38:19.194Z',
                updatedAt: '2023-05-23T21:32:50.654Z',
            },
            {
                _id: '646d320133e1000991a12f02',
                title: 'group2',
                tasks: [],
                completed: 0,
                notCompleted: 0,
                user: '64661e65fa90e3afa0b06a64',
                createdAt: '2023-05-23T21:37:05.513Z',
                updatedAt: '2023-05-23T21:37:18.099Z',
            }
        ],
            status: 'loaded'
        },
    auth: {
        data: {
            _id: "64661e65fa90e3afa0b06a64",
            fullName: "user1",
            email: "123@gmail.com",
            createdAt: "2023-05-18T12:47:33.343Z",
            updatedAt: "2023-05-18T12:47:33.343Z",
        },
        status: "loaded"
    }
}

export const errorMockObject = {
    groups: {
        items: [],
        status: 'error'
    },
    auth: {
        data: null,
        status: 'error'
    }
};

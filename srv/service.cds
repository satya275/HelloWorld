using { HelloWorld as my } from '../db/schema.cds';

@path : '/service/HelloWorldService'
service HelloWorldService
{
    @cds.redirection.target
    @odata.draft.enabled
    entity Student as
        projection on my.Student;
}

annotate HelloWorldService with @requires :
[
    'authenticated-user'
];

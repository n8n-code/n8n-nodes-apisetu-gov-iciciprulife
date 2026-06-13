import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovIciciprulifeApi implements ICredentialType {
        name = 'N8nDevApisetuGovIciciprulifeApi';

        displayName = 'Apisetu Gov Iciciprulife API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovIciciprulife/apisetu-gov-iciciprulife.svg', dark: 'file:../nodes/ApisetuGovIciciprulife/apisetu-gov-iciciprulife.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/iciciprulife/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/iciciprulife/v3',
                        description: 'The base URL of your Apisetu Gov Iciciprulife API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}

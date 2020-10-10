import { ApiProperty } from '@nestjs/swagger'

export class AppHealth {
    @ApiProperty({ example: 'API Boiler-plate' })
    project: string

    @ApiProperty({ example: Date.now() })
    time: number

    @ApiProperty({ description: `current build number`, example: '230' })
    build: string

    @ApiProperty({ description: 'original commit the build is based on', example: '4a104c68-32c7-4da9-aeed-aa9aaf9ff0e0' })
    commit: string

    @ApiProperty({ description: 'when the build was created', example: Date.now().toString() })
    created: string

}
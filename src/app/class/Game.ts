export class Game {

    constructor(public Id: number, public Name: string, public TypeGameId: number, public DetailsId: number, public StartDate: Date, public EndDate: Date, public SettingsId: number, public AudienceId?: number) {

    }
}
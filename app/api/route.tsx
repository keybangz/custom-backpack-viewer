import { NextResponse } from 'next/server';

// Here we can define the custom weapon list the gameserver administrator built with the web panel.
// Route currently local.host/api
export async function GET(req: Request){
  return NextResponse.json({
    "Items": {
        "{identifier}": {
            "name": "name_value",
            "inherits":  "Upgradeable TF_WEAPON_FLAMETHROWER",
            "attributes_game": {
                "mod flamethrower back crit": "1"
            }
        }
    }
  });
}
import { Flag } from '../../types/general';

export const CREATURE_TYPE_FLAGS: Flag[] = [
  { bit: 0, name: 'TAMEABLE - Makes the mob tameable (must also be a beast and have family set)' },
  { bit: 1, name: 'VISIBLE_TO_GHOSTS - Creature are also visible for not alive player.' },
  {
    bit: 2,
    name: 'BOSS_MOB - Changes creature’s visible level to "??" in the creature’s portrait - Immune to Knockback.',
  },
  { bit: 3, name: 'DO_NOT_PLAY_WOUND_PARRY_ANIMATION' },
  { bit: 4, name: 'NO_FACTION_TOOLTIP' },
  { bit: 5, name: 'MORE_AUDIBLE' },
  { bit: 6, name: 'SPELL_ATTACKABLE' },
  { bit: 7, name: 'INTERACT_WHILE_DEAD - Player can interact with the creature if its dead (not player dead)' },
  { bit: 8, name: 'SKIN_WITH_HERBALISM - Makes mob herbable' },
  { bit: 9, name: 'SKIN_WITH_MINING - Makes mob minable' },
  { bit: 10, name: 'NO_DEATH_MESSAGE - Does not combatlog death.' },
  { bit: 11, name: 'ALLOW_MOUNTED_COMBAT - Creature can remain mounted when entering combat' },
  { bit: 12, name: 'CAN_ASSIST - Can assist any player in combat if in range' },
  { bit: 13, name: 'NO_PET_BAR' },
  { bit: 14, name: 'MASK_UID' },
  { bit: 15, name: 'SKIN_WITH_ENGINEERING - Makes mob lootable by engineer' },
  { bit: 16, name: 'TAMEABLE_EXOTIC - Tamable as an exotic pet. Normal tamable flag must also be set.' },
  { bit: 17, name: 'USE_MODEL_COLLISION_SIZE' },
  { bit: 18, name: 'ALLOW_INTERACTION_WHILE_IN_COMBAT' },
  {
    bit: 19,
    name: 'COLLIDE_WITH_MISSILES - Projectiles can collide with this creature - interacts with TARGET_DEST_TRAJ',
  },
  { bit: 20, name: 'NO_NAME_PLATE ' },
  { bit: 21, name: 'DO_NOT_PLAY_MOUNTED_ANIMATIONS' },
  { bit: 22, name: 'IS_LINK_ALL' },
  { bit: 23, name: 'INTERACT_ONLY_WITH_CREATOR' },
  { bit: 24, name: 'DO_NOT_PLAY_UNIT_EVENT_SOUNDS' },
  { bit: 25, name: 'HAS_NO_SHADOW_BLOB' },
  { bit: 26, name: 'TREAT_AS_RAID_UNIT' },
  { bit: 27, name: 'FORCE_GOSSIP' },
  { bit: 28, name: 'DO_NOT_SHEATHE' },
  { bit: 29, name: 'DO_NOT_TARGET_ON_INTERACTION' },
  { bit: 30, name: 'DO_NOT_RENDER_OBJECT_NAME' },
  { bit: 31, name: 'UNIT_IS_QUEST_BOSS' },
];

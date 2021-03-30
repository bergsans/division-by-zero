import {
  PLAYER_FACES_LEFT,
  ENEMY_FACES_LEFT,
} from '../constants';

export const isPlayerHurt = (state) => state.player.state.includes('HURT');

export const isPlayerDead = (state) => state.player.death;

export const isPlayerJumping = (state) => state.player.state.includes('JUMP');

export const isPlayerSummoning = (state) => state.player.state.startsWith('PLAYER_SUMMON');

export const isPlayerFacingLeft = (player) => player.faces === PLAYER_FACES_LEFT;

export const isPlayerWatcherFacingLeft = (player) => player.remote.faces === PLAYER_FACES_LEFT;

export const isPlayerWatcherAttacking = (state) => state.player.remote.state.startsWith('PLAYER_WATCHER_ATTACK');

export const onlyType1Enemies = (state) => state.level[state.player.currentScreen].enemies.filter((e) => ['TYPE_1'].includes(e.type));

export const isEnemyAttacking = (enemy) => enemy.state.includes('ATTACK');

export const isEnemyFacingLeft = (enemy) => (enemy.faces === ENEMY_FACES_LEFT ? 'LEFT' : 'RIGHT');

export const nextScreen = (
  state,
) => state.level[state.player.currentScreen].items[state.player.hasHitItem].next;

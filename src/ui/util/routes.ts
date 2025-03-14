import helpers from "./helpers";
import initView from "./initView";
import views from "../views";

const genPage = (id: string, inLeague = true) => {
	const componentName = helpers.upperCaseFirstLetter(id);
	let Component;

	// @ts-ignore
	if (views[componentName]) {
		// @ts-ignore
		Component = views[componentName];
	}

	if (Component) {
		return initView({
			id,
			inLeague,
			Component,
		});
	}

	return () => {
		throw new Error(`Invalid component name: "${componentName}"`);
	};
};

const routes = {
	// Non-league views
	"/": genPage("dashboard", false),
	"/new_league": genPage("newLeague", false),
	"/new_league/:x": genPage("newLeague", false),
	"/achievements": genPage("achievements", false),
	"/account": genPage("account", false),
	"/account/login_or_register": genPage("loginOrRegister", false),
	"/account/lost_password": genPage("lostPassword", false),
	"/account/reset_password/:token": genPage("resetPassword", false),
	"/account/update_card": genPage("accountUpdateCard", false),
	"/settings": genPage("globalSettings", false),
	"/dropbox": genPage("dropbox", false),

	// League views
	"/l/:lid": genPage("leagueDashboard"),
	"/l/:lid/new_team": genPage("newTeam"),
	"/l/:lid/inbox": genPage("inbox"),
	"/l/:lid/message": genPage("message"),
	"/l/:lid/message/:mid": genPage("message"),
	"/l/:lid/standings": genPage("standings"),
	"/l/:lid/standings/:season": genPage("standings"),
	"/l/:lid/standings/:season/:type": genPage("standings"),
	"/l/:lid/playoffs": genPage("playoffs"),
	"/l/:lid/playoffs/:season": genPage("playoffs"),
	"/l/:lid/league_finances": genPage("leagueFinances"),
	"/l/:lid/league_finances/:season": genPage("leagueFinances"),
	"/l/:lid/history": genPage("history"),
	"/l/:lid/history/:season": genPage("history"),
	"/l/:lid/hall_of_fame": genPage("hallOfFame"),
	"/l/:lid/manage_confs": genPage("manageConfs"),
	"/l/:lid/manage_teams": genPage("manageTeams"),
	"/l/:lid/roster": genPage("roster"),
	"/l/:lid/roster/:abbrev": genPage("roster"),
	"/l/:lid/roster/:abbrev/:season": genPage("roster"),
	"/l/:lid/roster/:abbrev/:season/:playoffs": genPage("roster"),
	"/l/:lid/schedule": genPage("schedule"),
	"/l/:lid/schedule/:abbrev": genPage("schedule"),
	"/l/:lid/team_finances": genPage("teamFinances"),
	"/l/:lid/team_finances/:abbrev": genPage("teamFinances"),
	"/l/:lid/team_finances/:abbrev/:show": genPage("teamFinances"),
	"/l/:lid/team_history": genPage("teamHistory"),
	"/l/:lid/team_history/:abbrev": genPage("teamHistory"),
	"/l/:lid/free_agents": genPage("freeAgents"),
	"/l/:lid/trade": genPage("trade"),
	"/l/:lid/trading_block": genPage("tradingBlock"),
	"/l/:lid/edit_awards": genPage("editAwards"),
	"/l/:lid/edit_awards/:season": genPage("editAwards"),
	"/l/:lid/draft": genPage("draft"),
	"/l/:lid/draft_history": genPage("draftHistory"),
	"/l/:lid/draft_history/:season": genPage("draftHistory"),
	"/l/:lid/draft_team_history": genPage("draftTeamHistory"),
	"/l/:lid/draft_team_history/:abbrev": genPage("draftTeamHistory"),
	"/l/:lid/game_log": genPage("gameLog"),
	"/l/:lid/game_log/:abbrev": genPage("gameLog"),
	"/l/:lid/game_log/:abbrev/:season": genPage("gameLog"),
	"/l/:lid/game_log/:abbrev/:season/:gid": genPage("gameLog"),
	"/l/:lid/game_log/:abbrev/:season/:gid/:view": genPage("gameLog"),
	"/l/:lid/leaders": genPage("leaders"),
	"/l/:lid/leaders/:season": genPage("leaders"),
	"/l/:lid/leaders/:season/:playoffs": genPage("leaders"),
	"/l/:lid/player_bios": genPage("playerBios"),
	"/l/:lid/player_bios/:abbrev": genPage("playerBios"),
	"/l/:lid/player_bios/:abbrev/:season": genPage("playerBios"),
	"/l/:lid/player_ratings": genPage("playerRatings"),
	"/l/:lid/player_ratings/:abbrev": genPage("playerRatings"),
	"/l/:lid/player_ratings/:abbrev/:season": genPage("playerRatings"),
	"/l/:lid/player_stats": genPage("playerStats"),
	"/l/:lid/player_stats/:abbrev": genPage("playerStats"),
	"/l/:lid/player_stats/:abbrev/:season": genPage("playerStats"),
	"/l/:lid/player_stats/:abbrev/:season/:statType": genPage("playerStats"),
	"/l/:lid/player_stats/:abbrev/:season/:statType/:playoffs":
		genPage("playerStats"),
	"/l/:lid/team_stats": genPage("teamStats"),
	"/l/:lid/team_stats/:season": genPage("teamStats"),
	"/l/:lid/team_stats/:season/:teamOpponent": genPage("teamStats"),
	"/l/:lid/team_stats/:season/:teamOpponent/:playoffs": genPage("teamStats"),
	"/l/:lid/league_stats": genPage("leagueStats"),
	"/l/:lid/league_stats/:abbrev": genPage("leagueStats"),
	"/l/:lid/league_stats/:abbrev/:teamOpponent": genPage("leagueStats"),
	"/l/:lid/league_stats/:abbrev/:teamOpponent/:playoffs":
		genPage("leagueStats"),
	"/l/:lid/player/:pid": genPage("player"),
	"/l/:lid/player_game_log/:pid/:season": genPage("playerGameLog"),
	"/l/:lid/negotiation": genPage("negotiationList"),
	"/l/:lid/negotiation/:pid": genPage("negotiation"),
	"/l/:lid/player_rating_dists": genPage("playerRatingDists"),
	"/l/:lid/player_rating_dists/:season": genPage("playerRatingDists"),
	"/l/:lid/player_stat_dists": genPage("playerStatDists"),
	"/l/:lid/player_stat_dists/:season": genPage("playerStatDists"),
	"/l/:lid/player_stat_dists/:season/:statType": genPage("playerStatDists"),
	"/l/:lid/team_stat_dists": genPage("teamStatDists"),
	"/l/:lid/team_stat_dists/:season": genPage("teamStatDists"),
	"/l/:lid/export_league": genPage("exportLeague"),
	"/l/:lid/fantasy_draft": genPage("fantasyDraft"),
	"/l/:lid/live_game": genPage("liveGame"),
	"/l/:lid/event_log": genPage("eventLog"),
	"/l/:lid/event_log/:abbrev": genPage("eventLog"),
	"/l/:lid/event_log/:abbrev/:season": genPage("eventLog"),
	"/l/:lid/delete_old_data": genPage("deleteOldData"),
	"/l/:lid/draft_lottery": genPage("draftLottery"),
	"/l/:lid/draft_lottery/:season": genPage("draftLottery"),
	"/l/:lid/draft_scouting": genPage("draftScouting"),
	"/l/:lid/draft_scouting/:season": genPage("draftScouting"),
	"/l/:lid/watch_list": genPage("watchList"),
	"/l/:lid/watch_list/:statType": genPage("watchList"),
	"/l/:lid/watch_list/:statType/:playoffs": genPage("watchList"),
	"/l/:lid/watch_list/:statType/:playoffs/:flagNote": genPage("watchList"),
	"/l/:lid/customize_player": genPage("customizePlayer"),
	"/l/:lid/customize_player/:pid": genPage("customizePlayer"),
	"/l/:lid/customize_player/:pid/:type": genPage("customizePlayer"),
	"/l/:lid/history_all": genPage("historyAll"),
	"/l/:lid/upcoming_free_agents": genPage("upcomingFreeAgents"),
	"/l/:lid/upcoming_free_agents/:season": genPage("upcomingFreeAgents"),
	"/l/:lid/god_mode": genPage("godMode"),
	"/l/:lid/power_rankings": genPage("powerRankings"),
	"/l/:lid/power_rankings/:season": genPage("powerRankings"),
	"/l/:lid/power_rankings/:season/:playoffs": genPage("powerRankings"),
	"/l/:lid/export_stats": genPage("exportStats"),
	"/l/:lid/player_feats": genPage("playerFeats"),
	"/l/:lid/player_feats/:abbrev": genPage("playerFeats"),
	"/l/:lid/player_feats/:abbrev/:season": genPage("playerFeats"),
	"/l/:lid/multi_team_mode": genPage("multiTeamMode"),
	"/l/:lid/team_records": genPage("teamRecords"),
	"/l/:lid/team_records/:byType": genPage("teamRecords"),
	"/l/:lid/team_records/:byType/:filter": genPage("teamRecords"),
	"/l/:lid/awards_records": genPage("awardsRecords"),
	"/l/:lid/awards_records/:awardType": genPage("awardsRecords"),
	"/l/:lid/transactions": genPage("transactions"),
	"/l/:lid/transactions/:abbrev": genPage("transactions"),
	"/l/:lid/transactions/:abbrev/:season": genPage("transactions"),
	"/l/:lid/transactions/:abbrev/:season/:eventType": genPage("transactions"),
	"/l/:lid/danger_zone": genPage("dangerZone"),
	"/l/:lid/depth": genPage("depth"),
	"/l/:lid/depth/:abbrev": genPage("depth"),
	"/l/:lid/depth/:abbrev/:pos": genPage("depth"),
	"/l/:lid/depth/:abbrev/:pos/:playoffs": genPage("depth"),
	"/l/:lid/frivolities": genPage("frivolities"),
	"/l/:lid/frivolities/colleges": genPage("colleges"),
	"/l/:lid/frivolities/countries": genPage("countries"),
	"/l/:lid/frivolities/draft_classes": genPage("frivolitiesDraftClasses"),
	"/l/:lid/frivolities/draft_position": genPage("frivolitiesDraftPosition"),
	"/l/:lid/frivolities/jersey_numbers": genPage("frivolitiesJerseyNumbers"),
	"/l/:lid/frivolities/teams/:type": genPage("frivolitiesTeamSeasons"),
	"/l/:lid/frivolities/trades/:type": genPage("frivolitiesTrades"),
	"/l/:lid/frivolities/trades/:type/:abbrev": genPage("frivolitiesTrades"),
	"/l/:lid/frivolities/most/:type": genPage("most"),
	"/l/:lid/frivolities/most/:type/:arg": genPage("most"),
	"/l/:lid/frivolities/relatives": genPage("relatives"),
	"/l/:lid/frivolities/relatives/:pid": genPage("relatives"),
	"/l/:lid/frivolities/roster_continuity": genPage("rosterContinuity"),
	"/l/:lid/frivolities/tragic_deaths": genPage("tragicDeaths"),
	"/l/:lid/all_star": genPage("allStar"),
	"/l/:lid/all_star/draft": genPage("allStarDraft"),
	"/l/:lid/all_star/draft/:season": genPage("allStarDraft"),
	"/l/:lid/all_star/dunk": genPage("allStarDunk"),
	"/l/:lid/all_star/dunk/:season": genPage("allStarDunk"),
	"/l/:lid/all_star/three": genPage("allStarThree"),
	"/l/:lid/all_star/three/:season": genPage("allStarThree"),
	"/l/:lid/all_star/history": genPage("allStarHistory"),
	"/l/:lid/award_races": genPage("awardRaces"),
	"/l/:lid/award_races/:season": genPage("awardRaces"),
	"/l/:lid/expansion_draft": genPage("expansionDraft"),
	"/l/:lid/protect_players": genPage("protectPlayers"),
	"/l/:lid/news": genPage("news"),
	"/l/:lid/news/:abbrev": genPage("news"),
	"/l/:lid/news/:abbrev/:season": genPage("news"),
	"/l/:lid/news/:abbrev/:season/:level": genPage("news"),
	"/l/:lid/news/:abbrev/:season/:level/:order": genPage("news"),
	"/l/:lid/scheduled_events": genPage("scheduledEvents"),
	"/l/:lid/export_players": genPage("exportPlayers"),
	"/l/:lid/export_players/:season": genPage("exportPlayers"),
	"/l/:lid/import_players": genPage("importPlayers"),
	"/l/:lid/gm_history": genPage("gmHistory"),
	"/l/:lid/settings": genPage("settings"),
	"/l/:lid/trade_summary/:eid": genPage("tradeSummary"),
	"/l/:lid/head2head": genPage("headToHead"),
	"/l/:lid/head2head/:abbrev": genPage("headToHead"),
	"/l/:lid/head2head/:abbrev/:season": genPage("headToHead"),
	"/l/:lid/head2head/:abbrev/:season/:type": genPage("headToHead"),
	"/l/:lid/head2head_all": genPage("headToHeadAll"),
	"/l/:lid/head2head_all/:season": genPage("headToHeadAll"),
	"/l/:lid/head2head_all/:season/:type": genPage("headToHeadAll"),
	"/l/:lid/injuries": genPage("injuries"),
	"/l/:lid/injuries/:abbrev": genPage("injuries"),
	"/l/:lid/injuries/:abbrev/:season": genPage("injuries"),
	"/l/:lid/daily_schedule": genPage("dailySchedule"),
	"/l/:lid/daily_schedule/:season": genPage("dailySchedule"),
	"/l/:lid/daily_schedule/:season/:day": genPage("dailySchedule"),
	"/l/:lid/season_preview": genPage("seasonPreview"),
	"/l/:lid/season_preview/:season": genPage("seasonPreview"),
};

export default routes;

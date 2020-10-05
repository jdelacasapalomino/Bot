import { Command, CommandContext, Permission } from './command';
import config from '../../config.json';

export default class FlipCommand implements Command {
    precondition: Permission = '';
    name = 'vote';
    summary = 'Get Aura voting links, and support Aura';
    cooldown = 1;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        const details = config.bot.voteURLs.join(`\n`);
        return ctx.channel.send(details);
    }
}

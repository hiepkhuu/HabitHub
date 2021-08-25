from flask.cli import AppGroup
from .users import seed_users, undo_users
from .tasks import seed_tasks, undo_tasks
from .colors import seed_colors, undo_colors
from .rewards import seed_rewards, undo_rewards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()

    seed_colors()
    seed_tasks()
    seed_rewards()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()

    undo_colors()
    undo_tasks()
    undo_rewards()
    # Add other undo functions here

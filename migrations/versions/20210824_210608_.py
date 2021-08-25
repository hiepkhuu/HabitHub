"""empty message

Revision ID: a334ed8175e7
Revises: 5c831aecf737
Create Date: 2021-08-24 21:06:08.881641

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a334ed8175e7'
down_revision = '5c831aecf737'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('rewards', sa.Column('reward_details', sa.String(length=255), nullable=True))
    op.drop_column('rewards', 'due_date')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('rewards', sa.Column('due_date', sa.DATE(), autoincrement=False, nullable=True))
    op.drop_column('rewards', 'reward_details')
    # ### end Alembic commands ###

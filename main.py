import discord
from discord.ext import commands

# Substitua pelo seu token
TOKEN = '1243030011385085972'

# Inicialize o bot
intents = discord.Intents.default()
intents.members = True  # Habilite a permissão de membros
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot conectado como {bot.user}')

@bot.command()
async def list_members(ctx):
    members = ctx.guild.members
    for member in members:
        name = member.name
        avatar = member.avatar_url
        await ctx.send(f'Nome: {name}, Avatar: {avatar}')

bot.run(TOKEN)

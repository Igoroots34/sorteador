import discord
from discord.ext import commands
from flask import Flask, jsonify
import threading

# Substitua pelo seu token
TOKEN = 'MTI0MzAzMDAxMTM4NTA4NTk3Mg.GTJvBn.POzBGlsLTaq204ftHchDocbRmgHq_a4J0T2omE'
GUILD_ID = '840795725159464982'  # Substitua pelo ID do seu servidor

# Inicialize o bot com intenções apropriadas
intents = discord.Intents.default()
intents.members = True  # Habilite a permissão de membros
bot = commands.Bot(command_prefix='!', intents=intents)

# Inicialize o Flask app
app = Flask(__name__)

@app.route('/server_members', methods=['GET'])
def get_server_members():
    guild = bot.get_guild(int(GUILD_ID))
    members = guild.members
    members_list = [{'name': member.name, 'id': member.id} for member in members]
    print("Lista de membros:", members_list)  # Adiciona um print statement para verificar a lista de membros
    return jsonify(members_list)

@bot.event
async def on_ready():
    print(f'Bot conectado como {bot.user}')

def run_flask():
    app.run(host='0.0.0.0', port=5000)

# Executa o Flask em uma thread separada
flask_thread = threading.Thread(target=run_flask)
flask_thread.start()

bot.run(TOKEN)

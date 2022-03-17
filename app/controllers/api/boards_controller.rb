class Api::BoardsController < ApplicationController
    
    def show
        # note: review active record query slides to look into .includes()
        # dispatch board.list, board.card, etc
        #pass in multiline callback to .then in thunk action creator
        # import actions from other action files
        @board = Board.includes(:lists, :cards).find(params[:id])
        # @lists = List.all.where(board_id: @board.id)
        render :show
    end
    
    def index
        @boards = Board.all.where("workspace_id = ?", params[:workspace_id])
        render 'api/boards/index'
    end
    
    def create
        @board = Board.new(new_board_params)

        if @board.save
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end   
    end

    def destroy
        # ? issue: this method is now working but only after page is refreshed
        @board = Board.find(params[:id])

        if @board.destroy
            render 'api/boards/index'
        else
            render json: ['That board does not exist'], status: 404
        end
    end

    def new_board_params
        params.require(:board).permit(:title, :workspace_id, :id)
    end

end